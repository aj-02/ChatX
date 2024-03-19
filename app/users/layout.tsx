import { Metadata } from "next";
import getUsers from "../actions/getUsers";
import SideBar from "../components/SideBar/SideBar";
import UserList from "./components/UserList";

export const metadata: Metadata = {
  title: "Users || Talkitive",
  description: "Users page of Talkitive chat app",
};

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <SideBar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
