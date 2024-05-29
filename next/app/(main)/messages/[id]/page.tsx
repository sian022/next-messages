import React from "react";
import ChatMainComponent from "@/components/PageComponents/Messages/ChatMain";
import { dummyConvoData } from "@/utils/dummy";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const convoData = dummyConvoData;

  return convoData.map((convo) => ({
    id: convo.id.toString(),
  }));
}

const Page = ({ params }: PageProps) => {
  const { id } = params;

  const data = dummyConvoData.find((chat) => chat.id === parseInt(id, 10));

  if (!data) {
    return <div>Loading...</div>;
  }

  return <ChatMainComponent {...data} />;
};

export default Page;
