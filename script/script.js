var canvas = document. getElementById ( "canvas" );
var context = canvas. getContext ( "2d" );
//canvas에 mousedown 이벤트 추가 : 이벤트 발생시 mDown 호출
canvas. addEventListener ( "mousedown" , function (me) {
mDown (me)}, false );
//canvas에 mousemove 이벤트 추가 : 이벤트 발생시 mMove 호출
canvas. addEventListener ( "mousemove" , function (me) {
mMove (me)}, false );
//canvas에 mouseup 이벤트 추가 : 이벤트 발생시 : mUp 호출
canvas. addEventListener ( "mouseup" , function (me) {
mUp (me)}, false );
//canvas에 mouseout 이벤트 추가 : 이벤트 발생시 mOut 호출
canvas. addEventListener ( "mouseout" , function (me) {
mOut (me)}, false );
//처음 마우스 X좌표
var stX =0;
//처음 마우스 Y좌표
var stY =0;
//마우스를 캔버스에서 움직였을 때 그림 그리기 여부
var drag = false ;
function mDown(me)
{
stX = me. offsetX ; //눌렀을 때 현재 마우스 X좌표를 stX에 담음
stY = me. offsetY ; //눌렀을 때 현재 마우스 Y좌표를 stY에 담음
drag = true ; //그림 그리기는 그리는 상태로 변경
}
function mMove(me)
{
//drag가 false 일때는 return(return 아래는 실행 안함)
if (!drag)
{
return ;
}
//마우스를 움직일 때마다 X좌표를 nowX에 담음
var nowX = me. offsetX ;
//마우스를 움직일 때마다 Y좌표를 nowY에 담음
var nowY = me. offsetY ;
//실질적으로 캔버스에 그림을 그리는 부분
canvasDraw (nowX,nowY);
//마우스가 움직일때마다 X좌표를 stX에 담음
stX = nowX;
//마우스가 움직일때마다 Y좌표를 stY에 담음
stY = nowY;
}
function canvasDraw(currentX,currentY)
{
context. beginPath ();
//마우스를 누르고 움직일 때마다 시작점을 재지정
context. moveTo (stX,stY);
//마우스 시작점부터 현재 점까지 라인 그리기
context. lineTo (currentX,currentY);
context. stroke ();
}
function mUp(me)
{
drag = false ; //마우스를 떼었을 때 그리기 중지
}
function mOut(me)
{
drag = false ; //마우스가 캔버스 밖으로 벗어났을 때 그리기 중지
}

