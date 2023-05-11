import { Input, VStack, Text, FormControl, FormLabel, FormHelperText, Spacer, Textarea } from '@chakra-ui/react';
import { useState } from 'react';


export default function InputWithLabelAndFooter({ ...props }: any) {

  // TODO error checking as defined by props

  const [value, setValue] = useState('');
  const changeHandler = (e: any) => { setValue(e.target.value); }

  return (
    <FormControl 
      isRequired={props.isRequired} 
      isReadOnly={props.isReadOnly}
      isDisabled={props.isDisabled}
    >
      <VStack 
        px={8}
        w='full'
        spacing={2} 
        fontSize='xs'
        textAlign='left'
        fontFamily='body'
      >
        <Spacer />
        <FormControl
          w='full'
          as={Text} 
          fontSize='md' 
          fontFamily='heading'
          size={props.size ?? 'sm'} 
        >
          {props.label}
        </FormControl>
        {props.isTextArea ?
          <Textarea
            rows={7}
            fontSize='sm'
            color='textSecondary'
            bgColor={props.bg ?? 'bgSecondary'}
            focusBorderColor='highlight'
            value={props.value ?? value}
            onChange={props.changeHandler ?? changeHandler}
            placeholder={props.placeholder ?? ''}
          />
        :
          <Input 
            width={props.width ?? 'full'}
            borderRadius='md'
            bgColor={props.bg ?? 'bgSecondary'}
            color='textSecondary'
            focusBorderColor='highlight'
            size={props.size ?? 'md'} 
            type={props.type ?? 'text'} 
            value={props.value ?? value}
            autoComplete={props.autoComplete ?? 'off'}
            onChange={props.changeHandler ?? changeHandler} 
            placeholder={props.placeholder ?? ''}
          />
        }
        <Spacer />
      </VStack>
      {/* TODO Error messages */}
      {props.footer && 
        <FormHelperText 
          fontSize='xs' 
          fontFamily='mono'
        >
          {props.footer}
        </FormHelperText>
      }
    </FormControl>
  )

}