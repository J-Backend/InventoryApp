
//  export const setIdProp:T = (array: T[], prop: string) => {
//     const updatedData = array.map(item => ({
//       ...item,
//       id: item[prop]
//     }));
//     return updatedData;
//   }

// export const setIdProp = (array: object[], prop: string): object[] => {
//     const updatedData = array.map(item => ({
//       ...item,
//       id: item[prop as keyof typeof item]  
//     }));
//     return updatedData ;
//   };

export const setIdProp = <T extends { [key: string]: any }>(array: T[], prop: string): T[] => {
    const updatedData = array.map(item => ({
      ...item,
      id: item[prop as keyof T]  
    }));
    return updatedData;
  };