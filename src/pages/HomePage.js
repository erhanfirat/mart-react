import { differenceInDays, format } from "date-fns";
import { tr } from "date-fns/locale";

export const HomePage = () => {
  const daysToLearn = differenceInDays(new Date(), new Date("2024-03-18"));
  const formattedDate = format(new Date("2024-03-18"), "dd MMMM ccc, yyyy", {
    locale: tr,
  });

  return (
    <div>
      <h1>Ana Sayfa</h1>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, maiores
        ipsa itaque dignissimos cum placeat necessitatibus enim natus, corporis,
        sunt porro suscipit. Sapiente numquam consectetur nam sit quos vitae
        laborum.
      </p>
      <div className="bg-amber-700 rounded-full w-[100px] h-[100px] flex justify-center items-center">
        H
      </div>
      <p>{formattedDate} tarihinde eğitime başladım.</p>
      <p>{daysToLearn} gündür yazılım öğreniyorum!</p>
      <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdata.1freewallpapers.com%2Fdownload%2F3-cute-kittens.jpg&f=1&nofb=1&ipt=888f08ea09d4c41b6c9653d9acdcb5225132021851b06d8842eb112210456fa0&ipo=images" />
        <div>ÇİRKİN KEDİLER!</div>
      </div>
    </div>
  );
};
