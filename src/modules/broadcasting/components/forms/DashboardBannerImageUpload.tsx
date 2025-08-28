import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "@iconify/react/dist/iconify.js";

interface DashboardBannerImageUploadProps {
  onFileChange: (file: File | null) => void;
  value?: File | null;
}

const DashboardBannerImageUpload = ({
  onFileChange,
  value,
}: DashboardBannerImageUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFileChange(acceptedFiles[0] || null);
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="border border-dashed border-highlight-purple rounded-xl bg-primary3 py-8 px-4 flex flex-col items-center justify-center cursor-pointer transition-all"
    >
      <input {...getInputProps()} />

      <Icon
        width={40}
        height={40}
        color="#4700D6"
        strokeWidth={1}
        icon="iconoir:cloud-upload"
      />
      <p className="mt-2 text-base text-[#333333] font-medium">
        Drag & drop files or{" "}
        <span className="text-primary underline cursor-pointer">Browse</span>
      </p>
      {isDragActive && (
        <p className="text-xs text-primary mt-2">Drop the image here ...</p>
      )}
      {value && (
        <div className="mt-4">
          <span className="text-xs text-gray-500">Selected: {value.name}</span>
        </div>
      )}
    </div>
  );
};

export default DashboardBannerImageUpload;
