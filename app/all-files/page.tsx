import { ListBlobResult, list } from "@vercel/blob";
import Image from "next/image";
import { DeleteButton } from "../components/deleteButton";

export default async function AllFilesPage() {
  const result: ListBlobResult = await list();
  const blobs = result.blobs;

  return (
    <div>
      <h1>Files</h1>
      <ul>
        {blobs.map((blob) => (
          <li key={blob.url}>
            <a href={blob.url} target="_blank">
              {blob.pathname}
              <Image
                src={blob.url}
                alt={blob.pathname}
                width={100}
                height={100}
              />
            </a>
            <DeleteButton url={blob.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
