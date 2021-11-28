import axios  from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '7335b84cb0msh3c3baddcb476ee3p15d8c0jsne51095108f43'
//   }


export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '7335b84cb0msh3c3baddcb476ee3p15d8c0jsne51095108f43'
  }

  
    })
    return data
}