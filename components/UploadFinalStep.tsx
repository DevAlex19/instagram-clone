import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useSelector } from "react-redux";
import { createPost } from "../store/actions/actions";
import { RootState, useAppDispatch } from "../store/store/store";
import Button from "./Button";
import { UploadModalType } from "./UploadModal";

function UploadFinalStep({ setPage, image, setModal }: UploadModalType) {
  const dispatch = useAppDispatch();
  const { data: { email } } = useSelector((state: RootState) => state.user)

  const uploadPost = () => {
    const data = new FormData();
    data.append('file', image.data)
    data.append('upload_preset', 'upload_posts')
    data.append('cloud_name', process.env.NEXT_PUBLIC_CLOUD_NAME as string)
    dispatch(createPost({ data, email }))
    setModal(false)
    setPage(0)
  }

  return (
    <>
      <div
        style={{ borderBottom: "1px solid rgb(239, 239, 239)" }}
        className="py-3 px-5 flex justify-between items-center"
      >
        <FontAwesomeIcon
          onClick={() => setPage(0)}
          className="cursor-pointer"
          icon={faArrowLeft}
        />
        <Button onClick={uploadPost} modifiers="text-blue text-sm font-semibold">Continuare</Button>
      </div>
      <div className="flex-1 h-full w-full relative">
        <Image src={image.url} width="100%" height="100%" layout="responsive" />
      </div>
    </>
  );
}

export default UploadFinalStep;
