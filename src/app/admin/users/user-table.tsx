// funding-history-table.tsx
import { getAllUsers } from "../../../lib/supabase/client";
import { UserTableClient } from "./user-table-client";

interface User {
  id: string;
  email: string;
  created_at: string;
  metadata: Record<string, any>;
}

export async function UserTable() {
  const users = await getAllUsers();

  if (users.length === 0) {
    return <div>No users found</div>;
  }

  return <UserTableClient initialUsers={users as any} />;
}
