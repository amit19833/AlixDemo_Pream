import { useParams } from "react-router-dom";

const theater = {
  id: 1,
  name: "John Wayne Theater",
  tables: [
    {
      id: 1,
      table_number: 1,
      row: 1,
      column: 1,
      seats: [
        {
          id: 1,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 2,
          seat_number: 2,
          price: 10.75,
        },
      ],
    },
    {
      id: 2,
      table_number: 2,
      row: 1,
      column: 2,
      seats: [
        {
          id: 3,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 4,
          seat_number: 2,
          price: 10.75,
        },
        {
          id: 5,
          seat_number: 3,
          price: 10.75,
        },
        {
          id: 6,
          seat_number: 4,
          price: 10.75,
        },
      ],
    },
    {
      id: 3,
      table_number: 3,
      row: 1,
      column: 3,
      seats: [
        {
          id: 7,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 8,
          seat_number: 2,
          price: 10.75,
        },
        {
          id: 9,
          seat_number: 3,
          price: 10.75,
        },
        {
          id: 10,
          seat_number: 4,
          price: 10.75,
        },
      ],
    },
    {
      id: 4,
      table_number: 4,
      row: 1,
      column: 4,
      seats: [
        {
          id: 11,
          seat_number: 1,
          price: 10.75,
        },
      ],
    },
    {
      id: 5,
      table_number: 5,
      row: 1,
      column: 5,
      seats: [
        {
          id: 12,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 13,
          seat_number: 2,
          price: 10.75,
        },
      ],
    },
    {
      id: 6,
      table_number: 6,
      row: 2,
      column: 1,
      seats: [
        {
          id: 14,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 15,
          seat_number: 2,
          price: 10.75,
        },
        {
          id: 16,
          seat_number: 3,
          price: 10.75,
        },
        {
          id: 17,
          seat_number: 4,
          price: 10.75,
        },
      ],
    },
    {
      id: 7,
      table_number: 7,
      row: 2,
      column: 2,
      seats: [
        {
          id: 18,
          seat_number: 1,
          price: 10.75,
        },
      ],
    },
    {
      id: 8,
      table_number: 8,
      row: 2,
      column: 3,
      seats: [
        {
          id: 19,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 20,
          seat_number: 2,
          price: 10.75,
        },
      ],
    },
    {
      id: 9,
      table_number: 9,
      row: 2,
      column: 4,
      seats: [
        {
          id: 21,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 22,
          seat_number: 2,
          price: 10.75,
        },
        {
          id: 23,
          seat_number: 3,
          price: 10.75,
        },
        {
          id: 24,
          seat_number: 4,
          price: 10.75,
        },
      ],
    },
    {
      id: 10,
      table_number: 10,
      row: 2,
      column: 5,
      seats: [
        {
          id: 25,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 26,
          seat_number: 2,
          price: 10.75,
        },
      ],
    },
    {
      id: 11,
      table_number: 11,
      row: 3,
      column: 1,
      seats: [
        {
          id: 27,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 28,
          seat_number: 2,
          price: 10.75,
        },
      ],
    },
    {
      id: 12,
      table_number: 12,
      row: 3,
      column: 2,
      seats: [
        {
          id: 29,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 30,
          seat_number: 2,
          price: 10.75,
        },
        {
          id: 31,
          seat_number: 3,
          price: 10.75,
        },
        {
          id: 32,
          seat_number: 4,
          price: 10.75,
        },
      ],
    },
    {
      id: 13,
      table_number: 13,
      row: 3,
      column: 3,
      seats: [
        {
          id: 33,
          seat_number: 1,
          price: 10.75,
        },
      ],
    },
    {
      id: 14,
      table_number: 14,
      row: 3,
      column: 4,
      seats: [
        {
          id: 34,
          seat_number: 1,
          price: 10.75,
        },
        {
          id: 35,
          seat_number: 2,
          price: 10.75,
        },
      ],
    },
    {
      id: 15,
      table_number: 15,
      row: 3,
      column: 5,
      seats: [
        {
          id: 36,
          seat_number: 1,
          price: 10.75,
        },
      ],
    },
  ],
};

export function PickSeats({ showingId }: { showingId?: number }) {
  const { showingId: routeShowingId } = useParams<{ showingId: string }>();

  const effectiveShowingId =
    showingId ?? (routeShowingId ? Number(routeShowingId) : undefined);

  return <div>Showing Id (pick a seat):{effectiveShowingId}</div>;
}
