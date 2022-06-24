function getAdmins(map) {
    let adms = [];
    let usrs = [];
    for ([key, value] of users) {
        if (value === 'ADMINS') {
            adms.push(key);
        } else {
            usrs.push(key);
        }
    }
    return `Os ADMs são ${adms} e os Usuários são ${usrs}.`;
}

const users = new Map([
    ['Carlos', 'ADMINS'], ['Luiz', 'ADMINS'], ['Pedro', 'USERS'], ['Júlio', 'USERS'], ['João', 'ADMINS'], ]);

    console.log(getAdmins(users));