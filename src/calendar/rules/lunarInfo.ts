/**
 * 农历1900-2100的润大小信息表，为二进制表示，最后5位以下3条会有共享情况
 * 1. 前12位表示大小月，0表示小月（有29天），1表示大月（有30天）
 * 2. 最后4位表示闰月的月份（需将其转化成10进制），若当年没有闰月则为0000
 * 3. 倒数第5位为闰月的大小，0表示小月（有29天），1表示大月（有30天）
 */
export const LUNAR_INFO = [
  0b100101111011000, 0b100101011100000, 0b1010010101110000, 0b101010011010101, 0b1101001001100000, 0b1101100101010000,
  0b10110010101010100, 0b101011010100000, 0b1001101011010000, 0b101010111010010, 0b100101011100000, 0b1010010110110110,
  0b1010010011010000, 0b1101001001010000, 0b11101001001010101, 0b1011010101000000, 0b1101011010100000,
  0b1010110110100010, 0b1001010110110000, 0b10100100101110111, 0b100100101110000, 0b1010010010110000,
  0b1011010010110101, 0b110101001010000, 0b110110101000000, 0b11010101101010100, 0b10101101100000, 0b1001010101110000,
  0b101001011110010, 0b100100101110000, 0b110010101100110, 0b1101010010100000, 0b1110101001010000, 0b110111010010101,
  0b101101011010000, 0b10101101100000, 0b11000011011100011, 0b1001001011100000, 0b11100100011010111, 0b1100100101010000,
  0b1101010010100000, 0b11101100010100110, 0b1011010101010000, 0b101011010100000, 0b11010010110110100, 0b10010111010000,
  0b1001001011010000, 0b1101001010110010, 0b1010100101010000, 0b1011010101010111, 0b110110010100000, 0b1011010101010000,
  0b10101001101010101, 0b100110110100000, 0b1010010110110000, 0b10100010101110011, 0b101001010110000,
  0b1010100110101000, 0b1110100101010000, 0b110101010100000, 0b1010111010100110, 0b1010101101010000, 0b100101101100000,
  0b1010101011100100, 0b1010010101110000, 0b101001001100000, 0b1111001001100011, 0b1101100101010000, 0b101101101010111,
  0b101011010100000, 0b1001011011010000, 0b100110111010101, 0b100101011010000, 0b1010010011010000, 0b1101010011010100,
  0b1101001001010000, 0b1101010101011000, 0b1011010101000000, 0b1011011010100000, 0b11001010110100110,
  0b1001010110110000, 0b100100110110000, 0b1010100101110100, 0b1010010010110000, 0b1011001001111010, 0b110101001010000,
  0b110110101000000, 0b1010111101000110, 0b1010101101100000, 0b1001010101110000, 0b100101011110101, 0b100100101110000,
  0b110010010110000, 0b111010010100011, 0b1110101001010000, 0b110101101011000, 0b101101011000000, 0b1010101101100000,
  0b1001011011010101, 0b1001001011100000, 0b1100100101100000, 0b1101100101010100, 0b1101010010100000,
  0b1101101001010000, 0b111010101010010, 0b101011010100000, 0b1010101110110111, 0b10010111010000, 0b1001001011010000,
  0b1100101010110101, 0b1010100101010000, 0b1011010010100000, 0b1011101010100100, 0b1010110101010000, 0b101010111011001,
  0b100101110100000, 0b1010010110110000, 0b10101000101110110, 0b101001010110000, 0b1010100100110000, 0b111100101010100,
  0b110101010100000, 0b1010110101010000, 0b101101101010010, 0b100101101100000, 0b1010011011100110, 0b1010010011100000,
  0b1101001001100000, 0b1110101001100101, 0b1101010100110000, 0b101101010100000, 0b111011010100011, 0b1001011011010000,
  0b100101011111011, 0b100101011010000, 0b1010010011010000, 0b11101000010110110, 0b1101001001010000, 0b1101010100100000,
  0b1101110101000101, 0b1011010110100000, 0b101011011010000, 0b101010110110010, 0b100100110110000, 0b1010010101110111,
  0b1010010010110000, 0b1010101001010000, 0b11011001001010101, 0b110110100100000, 0b1010110110100000,
  0b10100101101100011, 0b1001001101110000, 0b100100111111000, 0b100100101110000, 0b110010010110000, 0b10110100010100110,
  0b1110101001010000, 0b110101100100000, 0b11010011011000100, 0b1010101011100000, 0b1010001011100000,
  0b1101001011100011, 0b1100100101100000, 0b1101010101010111, 0b1101010010100000, 0b1101101001010000, 0b101110101010101,
  0b101011010100000, 0b1010011011010000, 0b101010111010100, 0b101001011010000, 0b1010100110111000, 0b1010100101010000,
  0b1011010010100000, 0b1011011010100110, 0b1010110101010000, 0b101010110100000, 0b1010101110100100, 0b1010010110110000,
  0b101001010110000, 0b1011001001110011, 0b110100100110000, 0b111001100110111, 0b110101010100000, 0b1010110101010000,
  0b10100101101010101, 0b100101101100000, 0b1010010101110000, 0b101010011100100, 0b1101000101100000, 0b1110100101101000,
  0b1101010100100000, 0b1101101010100000, 0b10110101010100110, 0b101011011010000, 0b100101011100000, 0b1010100111010100,
  0b1010001011010000, 0b1101000101010000, 0b1111001001010010, 0b1101010100100000,
] as const;
