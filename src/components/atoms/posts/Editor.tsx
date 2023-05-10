import { memo, useEffect, useRef, useState } from 'react';

import EditorJS from '@editorjs/editorjs';
import EditorTools from '@/components/atoms/posts/EditorTools.js';

export type EditorProps = {
  isViewer: boolean;
}

function Editor({ isViewer }: EditorProps) {

  const editorRef = useRef<EditorJS>();
  const container = 'b3-editor';

  const createEditor = () => {
    return new EditorJS({
      holder: container,
      tools: EditorTools,
      placeholder: 'What are we writing about today?',
      readOnly: isViewer,
      onChange: (api, event) => { 
        console.log('change') 
        console.log(api)
        console.log(event)
      },
    });
  }

  
  useEffect(() => {
    if(!editorRef.current) editorRef.current = createEditor();

    // cleanup - @dev TODO understand this code
    // return () => { if(editorRef.current) editorRef.current.destroy(); }
  }, []);


  

  return <div id={container} />
}

export default memo(Editor);