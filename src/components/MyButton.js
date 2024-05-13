export const MyButton = ({ children, className, ...rest }) => {
  console.log("MyButton rest > ", rest);
  return (
    <button className={"btn " + className} {...rest}>
      {children}
    </button>
  );
};


const computer = {
  cpu: "gfx-m5",
  storage: "SSD-m2-5TB",
  ram: "32GB-DDR5",
  gpu: "NV-3200-Mx",
  cam: "stock"
}

const { cpu, storage, ...oem } = computer;
const oem2 = {
  ram: computer.ram,
  gpu: computer.gpu,
  cam: computer.cam
}

console.log("oem: ", oem);