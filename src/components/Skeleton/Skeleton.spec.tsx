import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import React from "react";
import { Typography } from "../Typography";
import { Skeleton } from "./Skeleton";

describe("Skeleton component test", () => {
	it("should render a visible Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton>
				<Typography variant="body-1">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae enim harum,
					consequuntur animi quia totam, magni maxime nisi pariatur aut sapiente cupiditate dolorem.
					Ratione praesentium quas accusamus maiores id.
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
	});

	it("should render a non visible Skeleton component inactive", () => {
		const { getByTestId } = render(
			<Skeleton show={false}>
				<Typography variant="body-1">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae enim harum,
					consequuntur animi quia totam, magni maxime nisi pariatur aut sapiente cupiditate dolorem.
					Ratione praesentium quas accusamus maiores id.
				</Typography>
			</Skeleton>
		);

		const typography = getByTestId("leuxTypography");

		expect(typography).toBeTruthy();
	});

	it("should render a rounded Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton variant="round">
				<Typography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--round");
	});

	it("should render a rect Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton variant="rect">
				<Typography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--rect");
	});

	it("should render a small Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton size="small">
				<Typography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--small");
	});

	it("should render a Skeleton paragraph variant with 3 rows", () => {
		const { getByTestId, getAllByTestId } = render(
			<Skeleton variant="paragraph" rows={3}>
				<Typography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();

		const skeletonRows = getAllByTestId("leuxSkeletonRow");

		expect(skeletonRows.length).toBe(3);
	});

	it("should render an active Skeleton component ", () => {
		const { getByTestId } = render(
			<Skeleton active>
				<Typography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--active");
	});

	it("should render a custom Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton customClass="custom-class" customStyles={{ backgroundColor: "red" }} width={300}>
				<Typography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Typography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();

		expect(skeleton).toHaveClass("custom-class");

		expect(skeleton).toHaveStyle("background-color: red");

		expect(skeleton).toHaveStyle("width: 300px");
	});
});
