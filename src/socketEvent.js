module.exports = {
    ADD_CHARA: "add chara",
    FETCH_CHARA: "fetch chara",
    UPDATE_INC: "update inc",
    UPDATE_DEC: "update dec",
    DELETE_CHARA: "delete chara"
}

export const addChara = (name, age) => {
    socket.emit(ADD_CHARA, name, age)
}

export const fetchChara = () => {
    socket.emit(FETCH_CHARA)
}

export const updateInc = name => {
    socket.emit(UPDATE_INC, name)
}

export const updateDec = name => {
    socket.emit(UPDATE_DEC, name)
}

export const deleteChara = name => {
    socket.emit(DELETE_CHARA, name)
}