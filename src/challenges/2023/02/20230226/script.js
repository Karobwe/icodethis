function App() {
    return (
        <div className={"text-gray-800"}>
            <header className={"bg-white px-4 pt-8"}>
                <div  className={"flex justify-between max-w-6xl mx-auto"}>
                    <h1>La Musique</h1>

                    <form className={"text-gray-500 flex space-x-2 px-4 py-1 [&:has(input:focus)]:text-gray-800 [&:has(input:focus)]:outline [&:has(input:focus)]:outline-1 [&:has(input:focus)]:outline-slate-300"}>
                        <label htmlFor="search" className="">
                            <span className={"hidden"}>Search</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </label>

                        <input id="search" type="search" placeholder="Search" className={"bg-transparent outline-none w-16 focus:w-fit"}></input>
                    </form>
                </div>
            </header>

            <main className={"bg-gray-100 my-8"}>
                <div className={"max-w-6xl m-4 mx-auto"}>
                    <section className={"relative overflow-hidden flex"}>
                        <div className={"bg-gradient-to-br from-pink-600/90 to-violet-500/90 z-10 w-full flex flex-col md:grid md:grid-cols-12 md:space-y-0"}>
                            <div className={"text-white flex flex-col space-y-2 p-4 sm:col-span-4 sm:space-y-6 lg:space-8"}>
                                <h4 className={"text-2xl sm:text-4xl lg:text-6xl"}>Explore</h4>

                                <p>Welcome to our music platform where you can explore various genres and eras, discover new artists, and curate personalized playlists.</p>

                                <button className={"bg-white text-indigo-300 w-fit px-4 py-2"}>Read More</button>
                            </div>

                            <div className={"flex flex-wrap justify-center justify-items-start gap-2 p-4 md:col-span-8"}>
                                <Album album={catalogue[0]} />
                                <Album album={catalogue[2]} />
                                <Album album={catalogue[4]} />
                                <Album album={catalogue[5]} />
                            </div>
                        </div>

                        <img className={"absolute object-cover"} src="https://images.unsplash.com/photo-1555895175-53d60a8f31e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"/>
                    </section>

                    <TitledSection title={"TOP 3"} haveLoadMoreLink={true}>
                        <div className={"flex flex-col items-center justify-between gap-2 sm:flex-row sm:flex-wrap sm:gap-0 sm:justify-start"}>
                            <FeaturedAlbum album={catalogue[1]}/>
                            <FeaturedAlbum album={catalogue[3]}/>
                            <FeaturedAlbum album={catalogue[6]}/>
                        </div>
                    </TitledSection>

                    <TitledSection title={"Recommended for You"}>
                        <div className={"flex flex-wrap justify-between gap-2 sm:justify-start sm:gap-0"}>
                            <Album album={catalogue[7]} />
                            <Album album={catalogue[8]} />
                            <Album album={catalogue[9]} />
                            <Album album={catalogue[10]} />
                            <Album album={catalogue[0]} />
                            <Album album={catalogue[1]} />
                            <Album album={catalogue[6]} />
                        </div>
                    </TitledSection>
                </div>
            </main>
        </div>
    );
}

function Detail({album}) {
    return (
        <div>
            <div className={"flex justify-between"}>
                <div className={"text-indigo-400 flex"}>
                    <Star filled={album.rating >= 1}/>
                    <Star filled={album.rating >= 2}/>
                    <Star filled={album.rating >= 3}/>
                    <Star filled={album.rating >= 4}/>
                    <Star filled={album.rating >= 5}/>
                </div>

                <span>${album.price}</span>
            </div>

            <h3 className={"text-lg font-medium"}>{album.title}</h3>
        </div>
    );
}

function Album({album}) {
    return (
        <figure className={"bg-white w-40 p-[.075em] space-y-4"}>
            <div className={"w-full aspect-square"}>
                <img src={album.poster} className={"object-cover"} alt={`Poster for "${album.title}" album`}/>
            </div>

            <div className={"p-3"}>
                <Detail album={album}/>
            </div>
        </figure>
    );
}

function FeaturedAlbum({album}) {
    return (
        <figure className={"flex-none bg-white w-96 grid grid-cols-2"}>
            <div className={"w-full aspect-square"}>
                <img src={album.poster} className={"object-cover"} alt={`Poster for "${album.title}" album`}/>
            </div>

            <div className={"relative p-3 h-48 overflow-hidden"}>
                <div className="absolute bg-gradient-to-b from-transparent via-white/0 to-white/100 w-full h-full"></div>
                <Detail album={album}/>

                <p className={"text-sm"}>{album.description}</p>
            </div>
        </figure>
    );
}

function Star({filled = false}) {
    const fillColor = filled ? "fill-current" : "";
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ${fillColor}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>

    );
}

function TitledSection({title, haveLoadMoreLink = false, loadMoreLink = "#", children}) {
    return (
        <section className={"my-6"}>
            <div className={"flex items-center justify-between"}>
                <h2 className={"text-2xl text-gray-400 mb-6"}>{title}</h2>

                {haveLoadMoreLink && <a href={loadMoreLink} className={"text-indigo-400"}>Load More</a>}
            </div>

            <div>{children}</div>
        </section>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

const catalogue = [ 
    {
        title: "The Chronic",
        description: "The album that changed the sound of West Coast hip-hop, with Dr. Dre's innovative production and iconic tracks like Nuthin' but a 'G' Thang, Let Me Ride, and Fuck wit Dre Day (And Everybody's Celebratin').",
        poster: "https://i.scdn.co/image/ab67616d00001e029710731c9d7baec635f1bab1",
        price: 9.99,
        rating: 5,
        featured: false
    },
    {
        title: "Nevermind",
        description: "The album that marked the mainstream breakthrough for grunge, with raw and emotionally charged tracks like Smells Like Teen Spirit, Come As You Are, and Lithium.",
        poster: "https://i.scdn.co/image/ab67616d00001e02fb2d4c1ac0a601826986c785",
        price: 12.99,
        rating: 4,
        featured: true
    },
    {
        title: "Ten",
        description: "The album that introduced Pearl Jam to the world, with powerful vocals from Eddie Vedder and hard-hitting rock tracks like Jeremy, Alive, and Even Flow.",
        poster: "https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864",
        price: 11.99,
        rating: 4,
        featured: false
    },
    {
        title: "Automatic for the People",
        description: "The album that saw R.E.M. evolve from their indie roots into a more mature and introspective sound, with tracks like Man on the Moon, Drive, and Everybody Hurts.",
        poster: "https://i.scdn.co/image/ab67616d00001e02ace3e7aae0b7c78bbe1c4f35",
        price: 10.99,
        rating: 4,
        featured: true
    },
    {
        title: "Use Your Illusion I",
        description: "The album that saw Guns N' Roses embrace a more experimental and diverse sound, with epic tracks like November Rain, Don't Cry, and Live and Let Die.",
        poster: "https://i.scdn.co/image/ab67616d00001e02e44963b8bb127552ac761873",
        price: 13.99,
        rating: 3,
        featured: false
    },
    {
        title: "Slanted and Enchanted",
        description: "The album that helped define the lo-fi sound of indie rock in the 90s, with tracks like Summer Babe, Trigger Cut, and Here.",
        poster: "https://i.scdn.co/image/ab67616d00001e02fd31dbca3d0757fcb196d5af",
        price: 8.99,
        rating: 4,
        featured: false
    },
    {
        title: "Siamese Dream",
        description: "The album that saw the Smashing Pumpkins reach new heights with their blend of heavy guitar riffs and dreamy melodies, with tracks like Today, Cherub Rock, and Disarm.",
        poster: "https://i.scdn.co/image/ab67616d00001e02fd1e7c26933d06af2fd0afe6",
        price: 12.99,
        rating: 5,
        featured: true
    },
    {
        title: "Automatic Midnight",
        description: "The debut album from punk rockers Hot Snakes, featuring high-energy tracks like If Credit's What Matters I'll Take Credit, XOX, and Light Up the Stars.",
        poster: "https://i.scdn.co/image/ab67616d00001e025fb92ebe8e1cb2e37bc51d5d",
        price: 9.99,
        rating: 4,
        featured: false
    },
    {
        title: "Enter the Wu-Tang (36 Chambers)",
        description: "The album that introduced the world to the Wu-Tang Clan and their unique blend of gritty beats and kung-fu inspired lyrics, with tracks like C.R.E.A.M., Protect Ya Neck, and Method Man.",
        poster: "https://i.scdn.co/image/ab67616d00001e025901aaa980d3e714bf01171c",
        price: 10.99,
        rating: 5,
        featured: true
    },
    {
        title: "De La Soul Is Dead",
        description: "The sophomore album from De La Soul, with a darker and more introspective sound compared to their debut, featuring tracks like A Roller Skating Jam Named Saturdays, Ring Ring Ring (Ha Ha Hey), and Keepin' the Faith.",
        poster: "https://i.scdn.co/image/ab67616d00001e021570a07919f28483c25c0254",
        price: 11.99,
        rating: 4,
        featured: false
    },
    {
        title: "Grace",
        description: "The only album released during Jeff Buckley's lifetime, showcasing his powerful and emotive vocals on tracks like Hallelujah, Last Goodbye, and Lover, You Should've Come Over.",
        poster: "https://i.scdn.co/image/ab67616d00001e026a760642a56847027428cb61",
        price: 13.99,
        rating: 5,
        featured: true
    },
];
  