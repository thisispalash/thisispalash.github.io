import { useEffect } from "react";


export default function PostModal({ ...props }) {

  const { _id } = props;


  const getPost = async (_id: string) => {

  }

  useEffect(() => {
    if(_id) getPost(_id);
  }, [_id]);

  return(
    <></>
  );
}