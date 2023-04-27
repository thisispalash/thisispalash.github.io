import { HStack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';


export default function DateTimeDisplay({ ...props }) {

  const { _date, _tz } = props;

  const [ date, setDate ] = useState<Date>();
  useEffect(() => { if(_date) setDate(new Date(_date)); }, [_date]);

  return (
    <HStack spacing={2} textAlign='left'>
      <Text fontSize='sm' color='gray.500'>
        {date?.toLocaleDateString('en-ca', { weekday:'short', year: '2-digit', month: '2-digit', day: '2-digit' })}
      </Text>
      <Text fontSize='sm' color='gray.500'>
        {date?.toLocaleTimeString(_tz, { hour: '2-digit', minute: '2-digit', dayPeriod: 'long' })}
      </Text>
      <Text fontSize='sm' color='gray.500'>
      </Text>
    </HStack>
  );
}