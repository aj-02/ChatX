import { Metadata } from "next";
import getConversations from "../actions/getConversations";
import SideBar from "../components/SideBar/SideBar";
import ConversationsList from "./components/ConversationsList";
import getUsers from "../actions/getUsers";

export const metadata: Metadata = {
  title: "Conversations || Talkitive",
  description: "Conversations page of Talkitive chat app",
};

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <SideBar>
      <div className="h-full">
        <ConversationsList users={users} initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
