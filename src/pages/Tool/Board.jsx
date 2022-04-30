import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const toDos = ["a", "b", "c", "d", "e", "f"];

const Board = () => {
  const onDragEnd = () => {};
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] bg-slate-300 flex justify-between absolute bottom-0">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className=" w-[60%]">
          <Droppable droppableId="one">
            {(magic) => (
              <div
                className=" bg-slate-500 h-[700px]"
                ref={magic.innerRef}
                {...magic.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <Draggable key={index} draggableId={toDo} index={index}>
                    {(magic) => (
                      <div
                        className="m-2 p-10 bg-green-400"
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </div>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
