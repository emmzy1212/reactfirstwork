
const apiUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => {
  return fetch(`${apiUrl}/posts`).then((response) => response.json());
};

// this is where the fetch user is coming from in the ip where the image of the side bar was got
// this will get multiple user 
export const fetchUsers = () => {
  return fetch("https://api.github.com/users").then((response) =>
    response.json()
  );
  // .then((data) => console.log(data));
};


export const fetchComments = () => {
    return fetch("https://api.github.com/users").then((response) =>
      response.json()
    );
    // .then((data) => console.log(data));
  };

  // then i will come to the api here to pass the navigate id where the api is coming from
  // this will get one user
  export const fetchUser = async (id) => {
    const response = await fetch(`https://api.github.com/user/${id}`);
    return await response.json();
  
    // .then((data) => console.log(data));
  };
