import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
      props: {
        ninjas: data,
      },
    };
  }

  catch(error){
    console.log("Error: " + error);
  }

  return {
    props: {}
  }
 
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Head>
        <title>Ninja List | Lists</title>
      </Head>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
