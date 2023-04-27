import { Stack, Spacer } from '@chakra-ui/react';
import DateTimeDisplay from '@/components/atoms/DateTimeDisplay';

export default function DateAndTags({ ...props }) {

  const { date, tags, isHeading } = props;

  return (
    <Stack 
      w='full'
      spacing={4} 
      direction={isHeading? 'column' : 'row'}
    >
      <DateTimeDisplay _date={date} />
      {/* Tags */}
      <Spacer />
    </Stack>
  );
}