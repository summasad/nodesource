//소켓을 통해서 넘어오는 새 방정보를 출력
socket.on("newRoom", (data) => {
  console.log(data);
});
