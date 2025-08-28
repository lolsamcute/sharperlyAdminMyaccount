const CreatorProfileTab = () => {
  const profileData = {
    phoneNumber: "+61 4 1234 5678",
    emailAddress: "judithdimokechukwu@gmail.com",
    dateAdded: "2025-05-27",
    lastActivity: "2025-05-27 19:25pm",
  };

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Phone Number
            </label>
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">🇦🇺</span>
              </div>
              <span className="text-gray-900">{profileData.phoneNumber}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email Address
            </label>
            <span className="text-gray-900">{profileData.emailAddress}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Date Added
            </label>
            <span className="text-gray-900">{profileData.dateAdded}</span>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Last Activity
            </label>
            <span className="text-gray-900">{profileData.lastActivity}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfileTab;
