import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export default function MarkdownViewer({ ...props }) {

  const { mkdown } = props;

  return (
    <Box p={8}
      overflowY='scroll'
      textAlign='justify'
    >
      <ReactMarkdown
        skipHtml
        children={mkdown}
        components={ChakraUIRenderer()}
      />
    </Box>
  );
}