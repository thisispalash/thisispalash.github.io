import { memo, useEffect, useRef, useState } from 'react';

import EditorJS, { OutputData } from '@editorjs/editorjs';
// import { OutputData } from '@editorjs/editorjs/types';
import { LogLevels } from '@editorjs/editorjs';

import EditorTools from '@/components/atoms/posts/EditorTools.js';

export type EditorProps = {
  isViewer: boolean;
  _post?: OutputData;
  changeHandler?: (_data: OutputData) => void;
}

function Editor({ isViewer, _post, changeHandler }: EditorProps) {

  const editorRef = useRef<EditorJS>();
  const container = 'b3-editor';

  const createEditor = () => {
    return new EditorJS({
      holder: container,
      tools: EditorTools,
      data: _post,
      placeholder: 'What are we writing about today?',
      readOnly: isViewer,
      // logLevel: LogLevels.ERROR,
      onChange: async (api, event) => {
        changeHandler && changeHandler(await api.saver.save());
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