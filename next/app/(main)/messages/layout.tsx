import React from "react";

type MessagesLayoutProps = {
  children: React.ReactNode;
  navigation: React.ReactNode;
};

const MessagesLayout = ({ children, navigation }: MessagesLayoutProps) => {
  return (
    <div className="flex flex-1 gap-4">
      {navigation}
      {children}
    </div>
  );
};

export default MessagesLayout;
