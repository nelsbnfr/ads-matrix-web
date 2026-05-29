import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Grid({ children }) {
  const gridRef = useRef(null);
  const timers = useRef({});
  const [activeCells, setActiveCells] = useState([]);

  const cellSize = 40;

  function handleMouseMove(e) {
    const rect = gridRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    const id = `${col}-${row}`;

    setActiveCells((prev) => {
      if (prev.some((cell) => cell.id === id)) return prev;

      return [...prev, { id, col, row }];
    });

    clearTimeout(timers.current[id]);

    timers.current[id] = setTimeout(() => {
      setActiveCells((prev) => prev.filter((cell) => cell.id !== id));
      delete timers.current[id];
    }, 500);
  }

  return (
    <div className="relative p-8">
      {/* Grid Layer */}
      <div className="absolute inset-8 pointer-events-auto z-0">
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveCells([])}
          className="relative h-full w-full overflow-hidden isolate border-2 border-primary shadow-[inset_0_0_20px_var(--color-primary-bg),0_0_20px_var(--color-bg-shadow)] pattern-grid"
        >
          {activeCells.map((cell) => (
            <div
              key={cell.id}
              className="grid-hover-cell"
              style={{
                left: cell.col * cellSize,
                top: cell.row * cellSize,
                width: cellSize,
                height: cellSize,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Layer über Grid, unter Content */}
      <div className="pointer-events-none absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080808] from-10% via-[#080808]/80 to-transparent z-10" />

      {/* Content Layer */}
      <div className="relative z-20 p-8">{children}</div>
    </div>
  );
}

export function ReverseGrid({ children }) {
  const gridRef = useRef(null);
  const timers = useRef({});
  const [activeCells, setActiveCells] = useState([]);

  const cellSize = 40;

  function handleMouseMove(e) {
    const rect = gridRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    const id = `${col}-${row}`;

    setActiveCells((prev) => {
      if (prev.some((cell) => cell.id === id)) return prev;

      return [...prev, { id, col, row }];
    });

    clearTimeout(timers.current[id]);

    timers.current[id] = setTimeout(() => {
      setActiveCells((prev) => prev.filter((cell) => cell.id !== id));
      delete timers.current[id];
    }, 500);
  }

  return (
    <div className="relative p-8">
      {/* Grid Layer */}
      <div className="absolute inset-8 pointer-events-auto z-0">
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveCells([])}
          className="relative h-full w-full overflow-hidden isolate border-2 border-primary shadow-[inset_0_0_20px_var(--color-primary-bg),0_0_20px_var(--color-bg-shadow)] pattern-grid"
        >
          {activeCells.map((cell) => (
            <div
              key={cell.id}
              className="grid-hover-cell"
              style={{
                left: cell.col * cellSize,
                top: cell.row * cellSize,
                width: cellSize,
                height: cellSize,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Layer über Grid, unter Content */}
      <div className="pointer-events-none absolute inset-0 pointer-events-none bg-gradient-to-b from-[#080808] from-10% via-[#080808]/80 to-transparent z-10" />

      {/* Content Layer */}
      <div className="relative z-20 p-8">{children}</div>
    </div>
  );
}

export function BlurredGrid({ children }) {
  return (
    <div className="client-card card-wobble relative flex-shrink-0 w-[340px] border-2 border-primary shadow-[inset_0_0_20px_var(--color-primary-bg),0_0_20px_var(--color-bg-shadow)] pattern-grid p-8 backdrop-blur-xs">
      {children}
    </div>
  );
}
export function PerspectiveGrid({ children }) {
  return (
    <div className="w-full relative">
      <div>{children}</div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <svg
          className="stroke-bg-shadow -translate-y-1/2"
          style={{
            transform: "rotate(180deg) scale(2)",
            height: "100%",
          }}
          viewBox="0 0 2664.4233 434"
        >
          <g>
            <polygon
              fill="none"
              stroke-width="1"
              stroke-miterlimit="10"
              points="55.9978,424.8101 2608.4255,424.8101 
		1540.0217,9.1899 1124.4015,9.1899 	"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1118.6338"
              y1="11.4336"
              x2="1545.7896"
              y2="11.4336"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1112.5367"
              y1="13.8054"
              x2="1551.8866"
              y2="13.8054"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1106.0813"
              y1="16.3166"
              x2="1558.3419"
              y2="16.3166"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1099.2351"
              y1="18.9799"
              x2="1565.1882"
              y2="18.9799"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1091.9613"
              y1="21.8095"
              x2="1572.462"
              y2="21.8095"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1084.2186"
              y1="24.8214"
              x2="1580.2046"
              y2="24.8214"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1075.9604"
              y1="28.034"
              x2="1588.4629"
              y2="28.034"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1067.1332"
              y1="31.4679"
              x2="1597.2902"
              y2="31.4679"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1057.6761"
              y1="35.1468"
              x2="1606.7472"
              y2="35.1468"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1047.5193"
              y1="39.0979"
              x2="1616.9041"
              y2="39.0979"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1036.582"
              y1="43.3526"
              x2="1627.8412"
              y2="43.3526"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1024.7709"
              y1="47.9473"
              x2="1639.6525"
              y2="47.9473"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1011.9767"
              y1="52.9243"
              x2="1652.4467"
              y2="52.9243"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="998.0714"
              y1="58.3337"
              x2="1666.3519"
              y2="58.3337"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="982.9036"
              y1="64.2341"
              x2="1681.5197"
              y2="64.2341"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="966.2933"
              y1="70.6956"
              x2="1698.13"
              y2="70.6956"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="948.0245"
              y1="77.8024"
              x2="1716.3988"
              y2="77.8024"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="927.8357"
              y1="85.6561"
              x2="1736.5876"
              y2="85.6561"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="905.4073"
              y1="94.3809"
              x2="1759.016"
              y2="94.3809"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="880.3449"
              y1="104.1305"
              x2="1784.0784"
              y2="104.1305"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="852.1555"
              y1="115.0965"
              x2="1812.2678"
              y2="115.0965"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="820.2149"
              y1="127.5217"
              x2="1844.2084"
              y2="127.5217"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="783.721"
              y1="141.7182"
              x2="1880.7023"
              y2="141.7182"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="741.6255"
              y1="158.0938"
              x2="1922.7979"
              y2="158.0938"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="692.5313"
              y1="177.1919"
              x2="1971.892"
              y2="177.1919"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="634.535"
              y1="199.7531"
              x2="2029.8883"
              y2="199.7531"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="564.9736"
              y1="226.8132"
              x2="2099.4497"
              y2="226.8132"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="480.005"
              y1="259.8669"
              x2="2184.4182"
              y2="259.8669"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="373.8727"
              y1="301.1535"
              x2="2290.5505"
              y2="301.1535"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="237.5448"
              y1="354.1864"
              x2="2426.8784"
              y2="354.1864"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2526.0891"
              y1="424.8101"
              x2="1526.6146"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2443.7527"
              y1="424.8101"
              x2="1513.2075"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2361.4163"
              y1="424.8101"
              x2="1499.8004"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2279.0801"
              y1="424.8101"
              x2="1486.3933"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2196.7437"
              y1="424.8101"
              x2="1472.9862"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2114.4072"
              y1="424.8101"
              x2="1459.5791"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2032.0708"
              y1="424.8101"
              x2="1446.172"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1949.7345"
              y1="424.8101"
              x2="1432.7649"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1867.3981"
              y1="424.8101"
              x2="1419.3578"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1785.0618"
              y1="424.8101"
              x2="1405.9507"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1702.7253"
              y1="424.8101"
              x2="1392.5436"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1620.3889"
              y1="424.8101"
              x2="1379.1365"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1538.0526"
              y1="424.8101"
              x2="1365.7294"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1455.7162"
              y1="424.8101"
              x2="1352.3223"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1373.3799"
              y1="424.8101"
              x2="1338.9152"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1291.0435"
              y1="424.8101"
              x2="1325.5081"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1208.707"
              y1="424.8101"
              x2="1312.101"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1126.3707"
              y1="424.8101"
              x2="1298.6938"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1044.0343"
              y1="424.8101"
              x2="1285.2867"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="961.6979"
              y1="424.8101"
              x2="1271.8796"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="879.3616"
              y1="424.8101"
              x2="1258.4725"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="797.0252"
              y1="424.8101"
              x2="1245.0654"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="714.6888"
              y1="424.8101"
              x2="1231.6583"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="632.3525"
              y1="424.8101"
              x2="1218.2512"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="550.0161"
              y1="424.8101"
              x2="1204.8441"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="467.6797"
              y1="424.8101"
              x2="1191.437"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="385.3433"
              y1="424.8101"
              x2="1178.0299"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="303.0069"
              y1="424.8101"
              x2="1164.6228"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="220.6706"
              y1="424.8101"
              x2="1151.2157"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="138.3342"
              y1="424.8101"
              x2="1137.8086"
              y2="9.1899"
            />
          </g>
        </svg>
        <svg
          className="stroke-bg-shadow translate-y-1/2"
          style={{ transform: "rotate(0deg) scale(2)", height: "100%" }}
          viewBox="0 0 2664.4233 434"
        >
          <g>
            <polygon
              fill="none"
              stroke-width="1"
              stroke-miterlimit="10"
              points="55.9978,424.8101 2608.4255,424.8101 
		1540.0217,9.1899 1124.4015,9.1899 	"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1118.6338"
              y1="11.4336"
              x2="1545.7896"
              y2="11.4336"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1112.5367"
              y1="13.8054"
              x2="1551.8866"
              y2="13.8054"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1106.0813"
              y1="16.3166"
              x2="1558.3419"
              y2="16.3166"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1099.2351"
              y1="18.9799"
              x2="1565.1882"
              y2="18.9799"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1091.9613"
              y1="21.8095"
              x2="1572.462"
              y2="21.8095"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1084.2186"
              y1="24.8214"
              x2="1580.2046"
              y2="24.8214"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1075.9604"
              y1="28.034"
              x2="1588.4629"
              y2="28.034"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1067.1332"
              y1="31.4679"
              x2="1597.2902"
              y2="31.4679"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1057.6761"
              y1="35.1468"
              x2="1606.7472"
              y2="35.1468"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1047.5193"
              y1="39.0979"
              x2="1616.9041"
              y2="39.0979"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1036.582"
              y1="43.3526"
              x2="1627.8412"
              y2="43.3526"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1024.7709"
              y1="47.9473"
              x2="1639.6525"
              y2="47.9473"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1011.9767"
              y1="52.9243"
              x2="1652.4467"
              y2="52.9243"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="998.0714"
              y1="58.3337"
              x2="1666.3519"
              y2="58.3337"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="982.9036"
              y1="64.2341"
              x2="1681.5197"
              y2="64.2341"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="966.2933"
              y1="70.6956"
              x2="1698.13"
              y2="70.6956"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="948.0245"
              y1="77.8024"
              x2="1716.3988"
              y2="77.8024"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="927.8357"
              y1="85.6561"
              x2="1736.5876"
              y2="85.6561"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="905.4073"
              y1="94.3809"
              x2="1759.016"
              y2="94.3809"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="880.3449"
              y1="104.1305"
              x2="1784.0784"
              y2="104.1305"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="852.1555"
              y1="115.0965"
              x2="1812.2678"
              y2="115.0965"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="820.2149"
              y1="127.5217"
              x2="1844.2084"
              y2="127.5217"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="783.721"
              y1="141.7182"
              x2="1880.7023"
              y2="141.7182"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="741.6255"
              y1="158.0938"
              x2="1922.7979"
              y2="158.0938"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="692.5313"
              y1="177.1919"
              x2="1971.892"
              y2="177.1919"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="634.535"
              y1="199.7531"
              x2="2029.8883"
              y2="199.7531"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="564.9736"
              y1="226.8132"
              x2="2099.4497"
              y2="226.8132"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="480.005"
              y1="259.8669"
              x2="2184.4182"
              y2="259.8669"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="373.8727"
              y1="301.1535"
              x2="2290.5505"
              y2="301.1535"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="237.5448"
              y1="354.1864"
              x2="2426.8784"
              y2="354.1864"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2526.0891"
              y1="424.8101"
              x2="1526.6146"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2443.7527"
              y1="424.8101"
              x2="1513.2075"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2361.4163"
              y1="424.8101"
              x2="1499.8004"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2279.0801"
              y1="424.8101"
              x2="1486.3933"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2196.7437"
              y1="424.8101"
              x2="1472.9862"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2114.4072"
              y1="424.8101"
              x2="1459.5791"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2032.0708"
              y1="424.8101"
              x2="1446.172"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1949.7345"
              y1="424.8101"
              x2="1432.7649"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1867.3981"
              y1="424.8101"
              x2="1419.3578"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1785.0618"
              y1="424.8101"
              x2="1405.9507"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1702.7253"
              y1="424.8101"
              x2="1392.5436"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1620.3889"
              y1="424.8101"
              x2="1379.1365"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1538.0526"
              y1="424.8101"
              x2="1365.7294"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1455.7162"
              y1="424.8101"
              x2="1352.3223"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1373.3799"
              y1="424.8101"
              x2="1338.9152"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1291.0435"
              y1="424.8101"
              x2="1325.5081"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1208.707"
              y1="424.8101"
              x2="1312.101"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1126.3707"
              y1="424.8101"
              x2="1298.6938"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="1044.0343"
              y1="424.8101"
              x2="1285.2867"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="961.6979"
              y1="424.8101"
              x2="1271.8796"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="879.3616"
              y1="424.8101"
              x2="1258.4725"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="797.0252"
              y1="424.8101"
              x2="1245.0654"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="714.6888"
              y1="424.8101"
              x2="1231.6583"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="632.3525"
              y1="424.8101"
              x2="1218.2512"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="550.0161"
              y1="424.8101"
              x2="1204.8441"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="467.6797"
              y1="424.8101"
              x2="1191.437"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="385.3433"
              y1="424.8101"
              x2="1178.0299"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="303.0069"
              y1="424.8101"
              x2="1164.6228"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="220.6706"
              y1="424.8101"
              x2="1151.2157"
              y2="9.1899"
            />

            <line
              fill="none"
              stroke-miterlimit="10"
              x1="138.3342"
              y1="424.8101"
              x2="1137.8086"
              y2="9.1899"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Box({ children, title }) {
  return (
    <section className="border-b-dark border-r-dark border-t-light border-l-light border-2 w-full max-w-[1200px] min-h-140 overflow-hidden flex flex-col">
      <div className="bg-primary p-1 flex justify-between items-center px-2">
        <h2 className="text-2xl uppercase [text-shadow:0_0_12px_var(--color-primary)] leading-none">
          {title}
        </h2>
        <Link
          to="/"
          className="cursor-none text-xl uppercase [text-shadow:0_0_12px_var(--color-primary)] border-b-dark border-r-dark border-t-light border-l-light border-2 size-8 flex items-center justify-center leading-none"
        >
          <svg className="size-4" viewBox="0 0 16.09 16.09">
            <g id="Ebene_2-2" data-name="Ebene 2">
              <g>
                <g>
                  <rect x="2.3" y="2.3" width="2.3" height="2.3" />
                  <rect width="2.3" height="2.3" />
                  <rect x="4.6" y="4.6" width="2.3" height="2.3" />
                  <rect x="6.9" y="6.9" width="2.3" height="2.3" />
                  <rect x="9.19" y="9.19" width="2.3" height="2.3" />
                  <rect x="11.49" y="11.49" width="2.3" height="2.3" />
                  <rect x="13.79" y="13.79" width="2.3" height="2.3" />
                </g>
                <g>
                  <rect
                    x="2.3"
                    y="11.49"
                    width="2.3"
                    height="2.3"
                    transform="translate(-9.19 16.09) rotate(-90)"
                  />
                  <rect
                    y="13.79"
                    width="2.3"
                    height="2.3"
                    transform="translate(-13.79 16.09) rotate(-90)"
                  />
                  <rect
                    x="4.6"
                    y="9.19"
                    width="2.3"
                    height="2.3"
                    transform="translate(-4.6 16.09) rotate(-90)"
                  />
                  <rect
                    x="6.9"
                    y="6.9"
                    width="2.3"
                    height="2.3"
                    transform="translate(0 16.09) rotate(-90)"
                  />
                  <rect
                    x="9.19"
                    y="4.6"
                    width="2.3"
                    height="2.3"
                    transform="translate(4.6 16.09) rotate(-90)"
                  />
                  <rect
                    x="11.49"
                    y="2.3"
                    width="2.3"
                    height="2.3"
                    transform="translate(9.19 16.09) rotate(-90)"
                  />
                  <rect
                    x="13.79"
                    width="2.3"
                    height="2.3"
                    transform="translate(13.79 16.09) rotate(-90)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      {children}
    </section>
  );
}
