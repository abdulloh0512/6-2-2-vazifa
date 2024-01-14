import Color from "./color";

const color = [
  {
    background: "color_1",
    code: "666CA3",
    rgb: "102, 108, 163",
    hsl: "234°, 25%, 52%",
  },
  {
    background: "color_2",
    code: "13183F",
    rgb: "19, 24, 63",
    hsl: "233°, 54%, 16%",
  },
  {
    background: "color_3",
    code: "83869A",
    rgb: "131, 134, 154",
    hsl: "232°, 10%, 56%",
  },
  {
    background: "color_4",
    code: "F74780",
    rgb: "247, 71, 128",
    hsl: "341°, 92%, 62%",
  },
  {
    background: "color_5",
    code: "FFA7C3",
    rgb: "255, 167, 195",
    hsl: "341°, 100%, 83%",
  },
  {
    background: "color_6",
    code: "FFFFFF",
    rgb: "255, 255, 255",
    hsl: "0°, 0%, 100%",
  },
  {
    background: "color_7",
    code: "F02AA6 - FF6F48",
    rgb: "240, 42, 166",
    hsl: "322°, 87%, 55%",
  },
  {
    background: "color_8",
    code: "4851FF - F02AA6",
    rgb: "72, 81, 255",
    hsl: "237°, 100%, 64%",
  },
];

function Colors() {
  return (
    <>
      <div className='color_content'>
        {color.map((color) => (
          <Color {...color} />
        ))}
      </div>
    </>
  );
}

export default Colors
