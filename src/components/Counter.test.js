import { act, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("Counter Successfully Load Test", () => {
  render(<Counter />);
});

test("Counter Initial Value Test", () => {
  // 3A Kuralı

  // 1 - Arrange: ortam ayarlaması, düzenlemesi, proje başlaması, component render edilmesi
  render(<Counter initialCounter={99} />);

  // 2 - Act: Kullanıcı aksiyonları gerçekleşir
  const sayacDegeri = screen.getByTestId("sayac-degeri");

  // 3 - Assert: Elde edilen sonuç ile beklenilen değer kıyaslanır
  expect(sayacDegeri).toHaveTextContent("99");
});

test("Counter Increase Descrease Tests", () => {
  // 3A Kuralı

  // 1 - Arrange: ortam ayarlaması, düzenlemesi, proje başlaması, component render edilmesi
  render(<Counter initialCounter={19} />);

  // 2 - Act: Kullanıcı aksiyonları gerçekleşir

  const increaseBtn = screen.getByTestId("increase-btn");
  act(() => {
    userEvent.click(increaseBtn);
    userEvent.click(increaseBtn);
    userEvent.click(increaseBtn);
  });

  const sayacDegeri = screen.getByTestId("sayac-degeri");

  screen.debug();

  // 3 - Assert: Elde edilen sonuç ile beklenilen değer kıyaslanır
  expect(sayacDegeri).toHaveTextContent("22");
});
