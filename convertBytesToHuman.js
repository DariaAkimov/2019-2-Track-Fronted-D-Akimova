/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и  класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if(typeof(bytes) != 'number' || bytes < 0)
			{
				return 'false';
			}
			if(bytes > 1024 && bytes < 1048576){
				bytes = bytes/1024;
				return bytes + 'Kb';
			}
			else if(bytes >= 1048576){
				bytes = bytes/1048576;
				return bytes + 'Mb';
			}
			else{
			return bytes + ' b';
		}
}
