const carName = "Hyundai Solaris";

let maxCarSpeed = 170; // максимальная скорость в км/ч
let carOwner = "Рычков Дмитрий";

// Выводим информацию в модальные окна
alert(`Название машины: ${carName}`);
alert(`Максимальная скорость: ${maxCarSpeed} км/ч`);
alert(`Владелец машины: ${carOwner || "не указан"}`);
