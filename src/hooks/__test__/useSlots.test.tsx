import React from "react";
import { renderHook, render } from "@testing-library/react";
import { expect, it } from "vitest";
import { useSlots } from "../useSlots";

type TestComponentAProps = React.PropsWithChildren<{ variant?: "a" | "b" }>;
function TestComponentA(props: TestComponentAProps) {
  return <div {...props} />;
}

function TestComponentB(props: React.PropsWithChildren<unknown>) {
  return <div {...props} />;
}

it("extracts elements based on config object", () => {
  const children = [
    <TestComponentA key="a" variant="a" />,
    <TestComponentB key="b" />,
    <div key="hello">Hello World</div>,
  ];
  const slotsConfig = {
    TestComponentASlot: TestComponentA,
    TestComponentBSlot: TestComponentB,
  };
  const { result } = renderHook(() => useSlots(children, slotsConfig));
  const [{ TestComponentASlot, TestComponentBSlot }, restChildren] =
    result.current;

  const { asFragment: testComponentASlotFragment } = render(
    TestComponentASlot ? <TestComponentASlot variant="a" /> : <></>,
  );
  const { asFragment: testComponentAFragment } = render(children[0]);

  const { asFragment: testComponentBSlotFragment } = render(
    TestComponentBSlot ? <TestComponentBSlot /> : <></>,
  );
  const { asFragment: testComponentBFragment } = render(children[1]);

  expect(testComponentASlotFragment()).toEqual(testComponentAFragment());
  expect(testComponentBSlotFragment()).toEqual(testComponentBFragment());
  expect(restChildren).toHaveLength(1);
  expect(restChildren[0]).toEqual(children[2]);
});

it("handles empty config object", () => {
  const children = [
    <TestComponentA key="a" />,
    <TestComponentB key="b" />,
    <div key="hello">Hello World</div>,
  ];
  const slotsConfig = {};
  const { result } = renderHook(() => useSlots(children, slotsConfig));
  expect(result.current).toMatchInlineSnapshot(`
    [
      {},
      [
        <TestComponentA />,
        <TestComponentB />,
        <div>
          Hello World
        </div>,
      ],
    ]
  `);
});

it("handles empty children", () => {
  const children: React.ReactNode = [];
  const slotsConfig = {
    a: TestComponentA,
    b: TestComponentB,
  };
  const { result } = renderHook(() => useSlots(children, slotsConfig));
  expect(result.current).toMatchInlineSnapshot(`
    [
      {
        "a": undefined,
        "b": undefined,
      },
      [],
    ]
  `);
});

it("ignores nested slots", () => {
  const children = [
    <TestComponentA key="a" />,
    <div key="b">
      <TestComponentB />
    </div>,
  ];
  const slotsConfig = {
    a: TestComponentA,
    b: TestComponentB,
  };
  const { result } = renderHook(() => useSlots(children, slotsConfig));
  expect(result.current).toMatchInlineSnapshot(`
    [
      {
        "a": [Function],
        "b": undefined,
      },
      [
        <div>
          <TestComponentB />
        </div>,
      ],
    ]
  `);
});

it("extracts elements based on condition in config object", () => {
  const children = [
    <TestComponentA key="a" variant="a" />,
    <TestComponentA key="b" variant="b" />,
    <div key="hello">Hello World</div>,
  ];

  const { result } = renderHook(() =>
    useSlots(children, {
      TestComponentASlot: [
        TestComponentA,
        (props: TestComponentAProps) => props.variant === "a",
      ],
      TestComponentBSlot: [
        TestComponentA,
        (props: TestComponentAProps) => props.variant === "b",
      ],
    }),
  );
  const [{ TestComponentASlot, TestComponentBSlot }, restChildren] =
    result.current;

  const { asFragment: testComponentASlotFragment } = render(
    TestComponentASlot ? <TestComponentASlot variant="a" /> : <></>,
  );
  const { asFragment: testComponentAFragment } = render(children[0]);

  const { asFragment: testComponentBSlotFragment } = render(
    TestComponentBSlot ? <TestComponentBSlot /> : <></>,
  );
  const { asFragment: testComponentBFragment } = render(children[1]);

  expect(testComponentASlotFragment()).toEqual(testComponentAFragment());
  expect(testComponentBSlotFragment()).toEqual(testComponentBFragment());
  expect(restChildren).toHaveLength(1);
  expect(restChildren[0]).toEqual(children[2]);
});
