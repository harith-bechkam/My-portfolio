import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  // featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      title: "Mobile App",
      id: "mobile",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      // case "featured":
      //   setData(featuredPortfolio);
      //   break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>My Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={`https://github.com/harith-bechkam/${d.githubname}`} target="_blank">
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3><center>{d.title}</center></h3>
            </div></a>
        ))}
      </div>
    </div>
  );
}
