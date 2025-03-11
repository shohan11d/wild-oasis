function Settings() {
  return (
    <div className="p-10">
      <h2 className="text-3xl text-blue-400">Update hotel settings</h2>
      <div className="p-5 my-5 rounded-sm flex flex-col gap-4 bg-blue-400/10 w-[600px]">
        <div className="flex  gap-5 items-center">
          <label htmlFor="">Minimum nights</label>
          <input type="number" className="border py-1  rounded-sm" />
        </div>
        <div className="flex  gap-5 items-center">
          <label htmlFor="">Minimum nights</label>
          <input type="number" className="border py-1  rounded-sm" />
        </div>
        <div className="flex  gap-5 items-center">
          <label htmlFor="">Minimum nights</label>
          <input type="number" className="border py-1  rounded-sm" />
        </div>
        <div className="flex  gap-5 items-center">
          <label htmlFor="">Minimum nights</label>
          <input type="number" className="border py-1  rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default Settings;
