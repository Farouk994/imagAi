import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: "Image Upload was a success",
      description: "1 credit was deducted",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "something went wrong while loading",
      description: "Please try once more",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <div>
      <CldUploadWidget
        uploadPreset="imaginify"
        options={{
          multiple: false,
          resourceType: "image",
        }}
        onSuccess={onUploadSuccessHandler}
        onError={onUploadErrorHandler}
      >
        {({ open }) => (
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">Original</h3>
            {publicId ? (
              <>Here is the image</>
            ) : (
              <div className="media-uploader_cta" onClick={() => open()}>
                <div className="media-uploader_cta-image">
                    <Image 
                      src="/assets/icons/add.svg"
                      width={24}
                      height={24}
                      alt="Add image"
                    />
                </div>
                <p className="p-14-medium">
                    Click here to Upload Image
                </p>
              </div>
            )}
          </div>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default MediaUploader;
