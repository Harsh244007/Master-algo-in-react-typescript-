import { lazy } from "preact/compat";
const First = lazy(() => import("./categories/1Array/1Array1"));
const Second = lazy(() => import("./categories/1Array/1Array2"));
const Third = lazy(() => import("./categories/2Strings"));
const Fourth = lazy(() => import("./categories/3Sorting/3Sorting1"));
const Fifth = lazy(() => import("./categories/3Sorting/3Sorting2"));
const Sixth = lazy(() => import("./categories/4BinarySearch"));
const Seven = lazy(() => import("./categories/5Recursion/5Recursion1"));
const Eight = lazy(() => import("./categories/5Recursion/5Recursion2"));
const Nineth = lazy(() => import("./categories/6LinkedList/6Linked1"));
const Ten = lazy(() => import("./categories/6LinkedList/6Linked2"));
const Eleven = lazy(() => import("./categories/7StacksQueue/7Stacks1"));
const Tweleve = lazy(() => import("./categories/7StacksQueue/7Stacks2"));
const Thirteen = lazy(() => import("./categories/8Tree/8Tree1"));
const Fourteen = lazy(() => import("./categories/8Tree/8Tree2"));
const Fifteen = lazy(() => import("./categories/9Heap/9Heap1"));
const Sixteen = lazy(() => import("./categories/9Heap/9Heap1"));
const Seventeen = lazy(() => import("./categories/10HashMap/10HashMap1"));
const Eighteen = lazy(() => import("./categories/10HashMap/10HashMap2"));
const NineTeen = lazy(() => import("./categories/11Graph/11Graph1"));
const Twenty = lazy(() => import("./categories/11Graph/11Graph2"));
const TwentyOne = lazy(() => import("./categories/12Dynamic/12Dynamic1"));
const TwentyTwo = lazy(() => import("./categories/12Dynamic/12Dynamic2"));

const Home = lazy(() => import("./Home"));

import Navbar from "./Navbar/Navbar";
import Loading from "./Common/Loading";

export {
  Loading,
  Navbar,
  Home,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seven,
  Eight,
  Nineth,
  Ten,
  Eleven,
  Tweleve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
  Seventeen,
  Eighteen,
  NineTeen,
  Twenty,
  TwentyOne,
  TwentyTwo,
};
