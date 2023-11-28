// export const getProductById = async (id) => {
//     const token = "19|qYyllmQs40BX4HpJHMnjqV8Xza5n740OP7FGSphn01cbf528"
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`,  {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   },)
//   const data = await res.json()
//   return data
// }

export const fetchData = async (url) => {
    const token = "1|1D3xR0TYhixGNT64W4752rly4Lqsgb47XAc9LdUo8cf6e7c3"
    try {
      const res = await fetch(url, {
        //method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // console.log(res)
      if (!res.ok) {
        throw new Error("Réponse de l'API non valide")
      }
      const json = await res.json()
      // console.log(json)

      setData(json)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }

// const token = "19|qYyllmQs40BX4HpJHMnjqV8Xza5n740OP7FGSphn01cbf528"

// const res = await fetch(
//   `http://127.0.0.1:8000/api/admin/eventManager/approve/1`,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   },
// )

// const json = await res.json()

// const data = JSON.stringify(json)
//   useEffect(() => {
//     const fetchData = async () => {
//       const token = '19|qYyllmQs40BX4HpJHMnjqV8Xza5n740OP7FGSphn01cbf528';

//       try {
//         const res = await fetch(`http://127.0.0.1:8000/api/admin/eventManager/approve/1`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//           },
//         });

//         if (!res.ok) {
//           throw new Error('Réponse de l\'API non valide');
//         }

//         const json = await res.json();
//         setData(json);
//       } catch (error) {
//         console.error('Une erreur s\'est produite :', error);
//       }
//     };

//     fetchData();
//   }, []);
