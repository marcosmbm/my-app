import React from 'react'; 

export default function Repositories({repositories = []}) {
  return (
   <section className='list-repositories'>
     {
        repositories.map((repository, index) => {
            return(
                <div key={index} className='repository'>
                    <span>{repository.name}</span>

                    <div>
                        <a 
                            href={repository.html_url} 
                            target={"_blank"} 
                            rel="noreferrer"
                        >
                            Visualizar
                        </a>
                    </div>
                </div>
            )
        })
     }
   </section>
  );
}