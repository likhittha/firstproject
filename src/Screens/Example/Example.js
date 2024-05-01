export const Example = () => {
  return (
    <>
      <div className="bg-[#000] text-[#fff] h-[100vh] flex">
        <div className="bg-gray-500 flex-1 items-center justify-center flex">
          <div className="border-4 border-[#32012F] h-[50%] w-[50%] rounded-3xl">
            left
          </div>
        </div>
        <div className="bg-red-200 flex-1 flex justify-center items-center">
          <div className="border-4 border-[#524C42] h-[50%] w-[50%] text-[#000] rounded-3xl">
            <div className=" flex items-center justify-center mt-2 border-b-2 border-[#000] py-2">
              <div className="bg-red-500 rounded-full h-[100px] w-[100px]"></div>
            </div>
            <div className="p-3 flex items-center justify-center flex-col">
              <div>Line 1----------------</div>
              <div>Line 1----------------</div>
              <div>Line 1----------------</div>
              <div>Line 1----------------</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
