// user-table-client.tsx
"use client";

import { useState } from "react";
import Button from "../../../components/button";
import { supabase, supabaseAdmin } from "../../../lib/supabase/client";

interface User {
  id: string;
  email: string;
  created_at: string;
  user_metadata: Record<string, any>;
}

interface Props {
  initialUsers: User[] | [];
}

interface EditingState {
  id: string;
  data: Record<string, any>;
  rawText: string;
}

export function UserTableClient({ initialUsers }: Props) {
  const [users, setUsers] = useState(initialUsers);
  const [editingMetadata, setEditingMetadata] = useState<EditingState | null>(null);

  const updateUser = async (id: string, updates: Partial<User>) => {
    const { error } = await supabaseAdmin.auth.admin.updateUserById(
      id,
      { user_metadata: updates.user_metadata }
    )

    if (error) {
      console.error("Error updating user:", error);
      return;
    }

    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, ...updates } : user
      )
    );
    alert("User updated successfully");
  };

  const handleMetadataEdit = (id: string, metadata: Record<string, any>) => {
    setEditingMetadata({ 
      id, 
      data: { ...metadata },
      rawText: JSON.stringify(metadata, null, 2)
    });
  };

  const saveMetadata = async () => {
    if (!editingMetadata) return;
    
    try {
      const parsedData = JSON.parse(editingMetadata.rawText);
      await updateUser(editingMetadata.id, { user_metadata: parsedData });
      setEditingMetadata(null);
    } catch (err) {
      alert('Invalid JSON format');
    }
  };

  const deleteUser = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    const { error } = await supabaseAdmin.auth.admin.deleteUser(id);

    if (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
      return;
    }

    setUsers(users.filter(user => user.id !== id));
    alert('User deleted successfully');
  };

  const approveUser = async (id: string, currentMetadata: Record<string, any>) => {
    const updatedMetadata = {
      ...currentMetadata,
      approved: true
    };

    const { error } = await supabaseAdmin.auth.admin.updateUserById(
      id,
      { user_metadata: updatedMetadata }
    );

    if (error) {
      console.error('Error approving user:', error);
      alert('Failed to approve user');
      return;
    }

    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, user_metadata: updatedMetadata }
        : user
    ));
    alert('User approved successfully');
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-pink-100/10 text-left">
            {/* <th className="p-3 text-pink-200">ID</th> */}
            <th className="p-3 text-pink-200">Email</th>
            <th className="p-3 text-pink-200">Created At</th>
            <th className="p-3 text-pink-200">Metadata</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} className="border-b border-gray-800">
              {/* <td className="p-3">#{user.id}</td> */}
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                {new Date(user.created_at).toLocaleDateString()}
              </td>
              <td className="p-3">
                {editingMetadata?.id === user.id ? (
                  <div className="flex flex-col gap-2">
                    <textarea
                      rows={10}
                      className="bg-gray-800 p-2 rounded w-full"
                      value={editingMetadata.rawText}
                      onChange={(e) => {
                        setEditingMetadata({
                          ...editingMetadata,
                          rawText: e.target.value
                        });
                      }}
                    />
                    <div className="flex gap-2">
                      <Button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={saveMetadata}
                      >
                        Save
                      </Button>
                      <Button
                        className="bg-gray-500 text-white px-3 py-1 rounded"
                        onClick={() => setEditingMetadata(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <pre className="text-sm">
                      {JSON.stringify(user.user_metadata, null, 2)}
                    </pre>
                    <Button
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                      onClick={() => handleMetadataEdit(user.id, user.user_metadata)}
                    >
                      Edit
                    </Button>
                    <Button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => approveUser(user.id, user.user_metadata)}
                        disabled={user.user_metadata?.approved}
                      >
                        {user.user_metadata?.approved ? 'Approved' : 'Approve'}
                      </Button>
                      <Button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          {!users?.length && (
            <tr>
              <td colSpan={4} className="p-3 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
