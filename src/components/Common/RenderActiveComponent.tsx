import {
  Eight,
  Eighteen,
  Eleven,
  Fifteen,
  Fifth,
  First,
  Fourteen,
  Fourth,
  NineTeen,
  Nineth,
  Second,
  Seven,
  Seventeen,
  Sixteen,
  Sixth,
  Ten,
  Third,
  Thirteen,
  Tweleve,
  Twenty,
  TwentyOne,
  TwentyTwo,
} from "..";
import Home from "../Home";

export const renderActiveComponent = (componetNumber: number) => {
  switch (componetNumber) {
    case 2:
      return <First />;
    case 3:
      return <Second />;
    case 4:
      return <Third />;
    case 5:
      return <Fourth />;
    case 6:
      return <Fifth />;
    case 7:
      return <Sixth />;
    case 8:
      return <Seven />;
    case 9:
      return <Eight />;
    case 10:
      return <Nineth />;
    case 11:
      return <Ten />;
    case 12:
      return <Eleven />;
    case 13:
      return <Tweleve />;
    case 14:
      return <Thirteen />;
    case 15:
      return <Fourteen />;
    case 16:
      return <Fifteen />;
    case 17:
      return <Sixteen />;
    case 18:
      return <Seventeen />;
    case 19:
      return <Eighteen />;
    case 20:
      return <NineTeen />;
    case 21:
      return <Twenty />;
    case 22:
      return <TwentyOne />;
    case 23:
      return <TwentyTwo />;
    default:
      return <Home />;
  }
};
