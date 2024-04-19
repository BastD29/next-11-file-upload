"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [inProgress, setInProgress] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    setInProgress(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file as Blob);

    const response = await fetch("/api/file", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setPreview(data.url);
    setInProgress(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.item(0) || null)}
      />
      <button type="submit">{inProgress ? "Uploading..." : "Upload"}</button>

      {preview && (
        <div>
          <Image src={preview} alt="test" width={200} height={200} />
        </div>
      )}
    </form>
  );
}
