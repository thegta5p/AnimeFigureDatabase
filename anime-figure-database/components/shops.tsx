"use client";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export const Shops = () => {
  const shops = [
    {
      name: "AmiAmi",
      logo: "https://www.amiami.com/images/common/site_logo.png",
      url: "https://www.amiami.com/",
      width: 200,
    },
    {
      name: "Hobby Search",
      logo: "https://www.1999.co.jp/images/hd_logomark_e.png",
      url: "https://www.1999.co.jp/eng/",
      width: 200,
    },
    {
      name: "Jungle",
      logo: "https://jungle-scs.co.jp/jungle/wp-content/uploads/2018/09/logo.gif",
      url: "https://jungle-scs.co.jp",
      width: 200,
    },
    {
      name: "Big Bad Toy Store",
      logo: "https://images.bigbadtoystore.com/site-images/BBTS-Logo-Header4-2xize.png",
      url: "https://www.bigbadtoystore.com/",
      width: 200,
    },
    {
      name: "Hobby Link Japan",
      logo: "https://d1gt5dppxgb6oq.cloudfront.net/topimg/New_Toppage_Com/hljLogo.png",
      url: "https://www.hlj.com/",
      width: 200,
    },
    {
      name: "Big in Japan",
      logo: "https://www.biginjap.com/img/logo.jpg?1497626155",
      url: "https://www.biginjap.com/",
      width: 200,
    },
    {
      name: "Tokyo Otaku Mode",
      logo: "https://dzt1km7tv28ex.cloudfront.net/static/common/product_logo_shop.svg",
      url: "https://otakumode.com/",
      width: 200,
    },
    {
      name: "Figure Haven",
      logo: "https://figurehaven.com/cdn/shop/files/logo_500x.png?v=1613679324",
      url: "https://figurehaven.com/",
      width: 200,
    },
    {
      name: "Amazon Japan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      url: "https://www.amazon.co.jp/",
      width: 200,
    },
    {
      name: "Crunchyroll Store",
      logo: "https://www.logo.wine/a/logo/Crunchyroll/Crunchyroll-Logo.wine.svg",
      url: "https://store.crunchyroll.com/",
      width: 200,
    },
    {
      name: "Solaris Japan",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDqtrBFd82O2E0priYqHUaNNAM5GHPfeygzot-UYbxuAB1BmG82-fsGrjN2xQmXC5Ggo&usqp=CAU",
      url: "https://solarisjapan.com/",
      width: 150,
    },
    {
      name: "Good Smile Company US",
      logo: "https://animota.net/cdn/shop/collections/3124600456.png?v=1699263672",
      url: "https://www.goodsmileus.com/",
      width: 200,
    },
  ];

  return (
    <div>
      <Card>
        <CardHeader>
          <div>Shops</div>
        </CardHeader>
        <Divider />
        <CardBody className="grid grid-cols-4 gap-y-4">
          {shops.map((shop) => (
            <div
              key={shop.name}
              className="grid grid-rows place-items-center gap-y-2"
            >
              <a href={shop.url} target="_blank" rel="noopener noreferrer">
                <Image alt={shop.name} src={shop.logo} width={shop.width} />
              </a>
              <div className="">{shop.name}</div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};
