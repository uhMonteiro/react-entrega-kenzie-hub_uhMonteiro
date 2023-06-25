

export function NameDivHome({ user }){
    return(
        <section>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module} </p>
        </section>
    )
}