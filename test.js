function convertTime(time) {
    let militaryTime = '';
    const isAM = time.slice(-2) === 'AM';
    console.log(isAM)  // false
    let [hours, minutes, seconds] = time.slice(0, -2).split(':');
    console.log(hours, minutes, seconds) //07 05 45
    // Шаг 1: Проверяем, является ли время AM или PM
    if (isAM) {
      // Шаг 2: Если время AM и часы равны 12, преобразуем их в 00
      if (hours === '12') {
        hours = '00';
      }
    } else {
      // Шаг 3: Если время PM и часы не равны 12, добавляем 12 к часам
      if (hours !== '12') {
        hours = String(Number(hours) + 12);
      }
    }
    
    // Шаг 4: Собираем преобразованные значения часов, минут и секунд в новую строку
    militaryTime = `${hours}:${minutes}:${seconds}`;
    
    // Шаг 5: Возвращаем время в формате 24-часового времени
    return militaryTime;
  }
  
  // Пример использования
  const inputTime = '07:05:45PM';
  const militaryTime = convertTime(inputTime);
  console.log(militaryTime); // Output: 19:05:45
  