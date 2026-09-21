function Userprofiles() {
    //logic
    const user = {
        name: "bui viet khoa",
        birthday: 2000,
        avatarUrl: "https://i.pravatar.cc/150?img=69",
        state: "jacksonville",
        skills: ["html", "css", "laravel", "react"]

    }
    // UI-jsx
    return (
        <div>
            <h3>{user.name}</h3>
            <img className="thumbnail" src={user.avatarUrl} alt="" />
            <p>{user.state}</p>
            <p> sinh năm :{new Date().getFullYear() - user.birthday}</p>
            <h3>kỹ năng</h3>
            <ul>
                <li>{user.skills[0]}</li>
                <li>{user.skills[1]}</li>
                <li>{user.skills[2]}</li>
                <li>{user.skills[3]}</li>

            </ul>
        </div >
    )



}
export { Userprofiles };