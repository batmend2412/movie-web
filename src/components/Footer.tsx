export const Footer = () => {
  return (
    <div className="flex h-[280px] w-full bg-[#4338CA] p-20 gap-10 justify-between">
      <div className="flex gap-3 flex-col">
        <img src="" className="w-[92px] h-5"></img>
        <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-3 flex-col">
          <p className="text-white">Contact Information</p>
          <img src="" className="w-[174px] h-[104px]"></img>
        </div>
        <div className="flex gap-3 flex-col text-white">
          <p>Follow us </p>
          <p>Facebook Instagramm Twitter Youtube</p>
        </div>
      </div>
    </div>
  );
};
