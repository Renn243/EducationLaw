import React from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <main className="flex justify-center mt-10">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-500">Profile</h2>
          <hr className="border-t-2 border-red-500 my-4" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">
                <span className="font-semibold">Username</span> :{' '}
                <span className="text-red-500">username</span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Nama</span> :{' '}
                <span className="text-red-500">nama</span>
              </p>
              <p className="text-gray-400 mt-2">
                Bergabung pada tanggal 03/06/2025
              </p>
            </div>
            <img
              src="https://placehold.co/100x100"
              alt="Profile Picture"
              className="w-36 h-36 bg-red-500 rounded-md"
            />
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Edit Profile
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Edit Password
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;