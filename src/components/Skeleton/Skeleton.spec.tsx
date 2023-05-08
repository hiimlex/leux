import { render } from "@testing-library/react";

import { Skeleton } from "./Skeleton";
import "@testing-library/jest-dom";
import React from "react";
import { Topography } from "../Topography";

describe("Skeleton component test", () => {
	it("should render a visible Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton show>
				<Topography variant="body-1">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae enim harum,
					consequuntur animi quia totam, magni maxime nisi pariatur aut sapiente cupiditate dolorem.
					Ratione praesentium quas accusamus maiores id.
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
	});

	it("should render a non visible Skeleton component inactive", () => {
		const { getByTestId } = render(
			<Skeleton>
				<Topography variant="body-1">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae enim harum,
					consequuntur animi quia totam, magni maxime nisi pariatur aut sapiente cupiditate dolorem.
					Ratione praesentium quas accusamus maiores id.
				</Topography>
			</Skeleton>
		);

		const topography = getByTestId("leuxTopography");

		expect(topography).toBeTruthy();
	});

	it("should render a rounded Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton variant="round" show>
				<Topography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--round");
	});

	it("should render a squared Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton variant="square" show>
				<Topography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--square");
	});

	it("should render a small Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton size="small" show>
				<Topography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--small");
	});

	it("should render a Skeleton paragraph variant with 3 rows", () => {
		const { getByTestId, getAllByTestId } = render(
			<Skeleton variant="paragraph" show rows={3}>
				<Topography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();

		const skeletonRows = getAllByTestId("leuxSkeletonRow");

		expect(skeletonRows.length).toBe(3);
	});

	it("should render an active Skeleton component ", () => {
		const { getByTestId } = render(
			<Skeleton show active>
				<Topography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();
		expect(skeleton).toHaveClass("le-skeleton--active");
	});

	it("should render a custom Skeleton component", () => {
		const { getByTestId } = render(
			<Skeleton
				show
				customClass="custom-class"
				customStyles={{ backgroundColor: "red" }}
				width={300}
			>
				<Topography variant="body-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse labore dolor beatae,
					ipsum autem praesentium expedita eos! Omnis minima ullam delectus nesciunt provident odit
					corrupti deserunt possimus necessitatibus quas?
				</Topography>
			</Skeleton>
		);

		const skeleton = getByTestId("leuxSkeleton");

		expect(skeleton).toBeTruthy();

		expect(skeleton).toHaveClass("custom-class");

		expect(skeleton).toHaveStyle("background-color: red");

		expect(skeleton).toHaveStyle("width: 300px");
	});
});
